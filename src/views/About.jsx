function About() {

  const styles = {
    container: {
      padding: "40px 20px",
      backgroundColor: "rgb(229, 217, 217)",
      minHeight: "100vh",
    },
    section: {
      backgroundColor: "#efeaea",
      margin: "20px auto",
      padding: "20px 25px",
      maxWidth: "800px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    },
    heading: {
      color: "#7b4c26",
      marginBottom: "10px",
    },
    paragraph: {
      color: "#181616",
      lineHeight: "1.6",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      margin: "8px 0",
      fontSize: "16px",
    },
    highlight: {
      marginTop: "10px",
      fontWeight: "bold",
      color: "#7b4c26",
    }
  };

  return (
    <div style={styles.container}>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to deliver fresh, high-quality flowers with creative 
          designs and excellent customer service. We believe flowers are the 
          perfect way to express love, gratitude, celebration, and comfort.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Services🌷</h2>
        <ul style={styles.list}>
           <li style={styles.listItem}>🌿 Indoor Plants & Green Gifts</li>
          <li style={styles.listItem}>🎁 Flower Gift Hampers</li>
          <li style={styles.listItem}>🎂 Birthday & Anniversary Flowers</li>
          <li style={styles.listItem}>🌹 Wedding & Event Decorations</li>
          <li style={styles.listItem}>💐 Customized Bouquets</li>
         
          
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Why Choose Us?</h2>
        <p style={styles.paragraph}>
          We carefully select fresh flowers daily from trusted growers to ensure 
          long-lasting beauty and fragrance. Our skilled florists design each 
          arrangement with creativity and attention to detail.
        </p>

        <p style={styles.highlight}>
          Whether it’s a small surprise or a grand celebration, Blooming Petals 
          is here to make your moments unforgettable.
        </p>
      </section>

    </div>
  );
}

export default About;