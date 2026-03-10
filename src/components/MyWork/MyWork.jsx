import React, { useState, useEffect } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const RepoCard = ({ repo, index }) => {
  const cardRef = useScrollAnimation(0.1);
  const delayMap = { 0: 'delay-1', 1: 'delay-2', 2: 'delay-3', 3: 'delay-1', 4: 'delay-2', 5: 'delay-3' };
  const delayClass = delayMap[index % 6] || '';

  return (
    <div ref={cardRef} className={`repo-card scroll-animate ${delayClass}`}>
      <h3>{repo.name}</h3>
      <p>{repo.description || 'No description available'}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View Project →
      </a>
    </div>
  );
};

const MyWork = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const titleRef = useScrollAnimation();
  const btnRef = useScrollAnimation();

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
      <div ref={titleRef} className="my-work-title scroll-animate">
        <h1>Latest Work<span>.</span></h1>
      </div>
      <div className="my-work-container">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          repos.slice(0, 6).map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))
        )}
      </div>
      <div ref={btnRef} className="showmore scroll-animate delay-1">
        <a href="https://github.com/yonlysuraj" target="_blank" rel="noopener noreferrer">
          <p>View More on GitHub</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default MyWork
