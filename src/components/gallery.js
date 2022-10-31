

function Gallery(props) {
  return (
    <div style={{ 'width': '500px', 'textAlign': 'center' }}>
      <img width='100%' src={props.objectImg} alt={props.title} />
      <p>{props.artist}</p>
    </div>
  )
};

export default Gallery;