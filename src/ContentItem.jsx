import React from 'react';

function ContentItem({ data }) {
  const mapLink = `https://livemap.getwemap.com/#/pinpoints/${data.id}`;

  return (
    <li>
      <div className="content-item">
        <div className="image-column">
          <img src={data.image_url} alt={data.name} />
        </div>
        <div className="data-column">
          <h3>{data.name}</h3>
          <p>Address: {data.address}</p>
        </div>
        <div className="data-column">
        <button onClick={() => window.open(mapLink, '_blank')}>Voir sur la carte</button>
        </div>
      </div>
    </li>
  );
}

export default ContentItem;
