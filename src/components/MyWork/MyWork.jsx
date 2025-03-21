import React, { useState, useEffect } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/yonlysuraj/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div id='work' className='my-work'>
      <div className="my-work-title">
        <h1>Latest Work<span>.</span></h1>
      </div>
      <div className="my-work-container">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          repos.slice(0, 6).map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description available'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))
        )}
      </div>
      <div className="showmore">
        <a href="https://github.com/yonlysuraj" target="_blank" rel="noopener noreferrer">
          <p>View More on GitHub</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default MyWork
