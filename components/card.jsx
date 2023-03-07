// import styles from './card.module.css';
export default function Card({ title, text, children }) {
  return (
    <>
      <div
        class="card"
        className="text-center"
        style={{
          width: '18rem',
          backgroundColor: '#DED9D9',
          padding: '1.5rem',
          margin: '1rem',
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}
        >
        {children}
        <div
          style={{
            padding: '1rem',
            fontSize: '1.2rem',
          }}>
          {title}
        </div>
        <text>{text}</text>
      </div>
    </>
  );
}
