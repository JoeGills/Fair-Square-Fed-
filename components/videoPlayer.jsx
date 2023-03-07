export default function VideoPlayer() {
  return (
    <div className="video-background">
      <video className="video" autoPlay loop muted>
        <source src="./media/slide.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">{/* Your website content goes here */}</div>
    </div>
  );
}
