const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      borderRadius: '10px',
      padding: '20px', 
      margin: '20px auto',
      maxWidth: '300px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ 
        color: 'blue',
        marginTop: '0',
        fontSize: '24px',
        textAlign: 'center'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '16px',
        color: '#555'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#000'
        }}>{props.age}</span>
      </p>
      <p style={{ 
        fontSize: '14px',
        color: '#666',
        fontStyle: 'italic',
        lineHeight: '1.5'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;