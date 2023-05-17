import "./main.css";

function Main() {
  const articles = [
    {
      "title": "Call organization",
      "content": "When a user initiates a call, the mobile unit sends a signal to the nearest base station, which relays the signal to the mobile switching center(MSC). The MSC then uses the home location register(HLR) to determine the mobile units’ subscription information and the visitor location register(VLR) to determine its current location.",
    },
    {
      "title": "Paging",
      "content": "The MSC sends a signal to all base stations within the mobile unit's coverage area, instructing them to page the mobile unit.",
    },
    {
      title: "Call acceptance",
      content: "When the mobile unit receives the paging signal, it responds with a signal indicating that it is ready to accept the call.",
    },
    {
      title: "Ongoing call",
      content: "Once the connection has been established, the mobile unit and base station communicate with each other to maintain the connection. MSC monitors the call and manages its routing to ensure that it remains connected.",
    },
    {
      title: "Handoff",
      content: "As the mobile unit moves from one call to another, the base station(BS) and MSC work together to hand off the call from one base station to the next without interrupting the connection.",
    },
  ];

  return (
    <div className="main">
      <div className="main-content">
        {
        articles.map((article, index) => {
          return (
            <div className="article" key={index}>
              <h4>{article.title}</h4>
              <p>{article.content}</p>
            </div>
          );
        })
        }
      </div>

      <div className="main-aside">
        <h2><ul>Highlights</ul></h2>
        <h3>Let us talk about what happens when you make call</h3>
        <h4>Call organization</h4>
        <h4>Paging</h4>
        <h4>call acceptance</h4>
        <h4>Ongoing call</h4>
        <h4>Handoff</h4>
        </div>
    </div>
  );
}

export default Main;
