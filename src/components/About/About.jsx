import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/pfp2.jpg'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const About = () => {
  const titleRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <div id='about' className='about'>
      <div ref={titleRef} className="about-title scroll-animate">
        <h1>About Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />  
      </div>
      <div className="about-sections">
        <div ref={leftRef} className="about-left scroll-animate delay-1">
          <img src={pfp} alt="Suraj Mallick" />
        </div>
        <div ref={rightRef} className="about-right scroll-animate delay-2">
          <div className="about-para">
            <p>I am Suraj Mallick, a Data Scientist and AI Developer with production experience building scalable Computer Vision and AI/ML solutions. Specialized in developing end-to-end vision pipelines, image and video processing workflows, and OCR-based intelligent document systems that deliver measurable business impact.</p>
            
            <div className="key-highlights">
              <p>-Computer Vision: OpenCV, OCR (Doctr, Tesseract), Vision LLMs, Object Detection.</p>
              <br />
              <p>-Generative AI & NLP: Transformers, Hugging Face, LangChain, RAG Pipelines, LLM Integration.</p>
              <br />
              <p>-Machine Learning: TensorFlow, PyTorch, Scikit-learn, XGBoost, Model Deployment.</p>
              <br />
              <p>-Cloud & Deployment: AWS (EC2, S3, SageMaker), Docker, FastAPI, CI/CD.</p>
            </div>

            <p>I am passionate about building AI-driven document intelligence systems, optimizing ML models for production, and creating robust data solutions that solve complex enterprise challenges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About