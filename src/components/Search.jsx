import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Search = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setCharacter(data);

        const quotesResponse = await fetch(`https://api.gameofthronesquotes.xyz/v1/character/${data.firstName.toLowerCase()}`);
        if (!quotesResponse.ok) {
          throw new Error('Quotes not found');
        }
        const quotesData = await quotesResponse.json();

        if (Array.isArray(quotesData) && quotesData.length > 0 && quotesData[0].quotes) {
          setQuotes(quotesData[0].quotes);
        } else {
          setQuotes([]);
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</div>;
  }

  return (
    <div className="character-detail" style={styles.container}>
      {character ? (
        <div style={styles.card}>
          <h1 style={styles.name}>{character.fullName}</h1>
          <img src={character.imageUrl} alt={character.fullName} style={styles.image} />
          <p style={styles.title}>{character.title}</p>
          <p style={styles.family}>{character.family}</p>
          {quotes.length > 0 && (
            <div style={styles.quotesContainer}>
              <h2 style={styles.quotesTitle}>Quotes</h2>
              <ul style={styles.quotesList}>
                {quotes.map((quote, index) => (
                  <li key={index} style={styles.quoteItem}>
                    "{quote}"
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>Character not found</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '40px',
    borderRadius: '10px',
    border: '2px solid #e50914',
    boxShadow: '0 0 15px rgba(229, 9, 20, 0.5)',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '50px auto',
  },
  name: {
    fontSize: '2rem',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: '900',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#e50914',
    marginBottom: '10px',
  },
  family: {
    fontSize: '1.2rem',
    color: '#ccc',
  },
  quotesContainer: {
    marginTop: '30px',
  },
  quotesTitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#e50914',
  },
  quotesList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  quoteItem: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontStyle: 'italic',
    color: '#ccc',
  },
};
