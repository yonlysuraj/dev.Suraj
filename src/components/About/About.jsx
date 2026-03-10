import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/pfp2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />  
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pfp} alt="Suraj Mallick" />
        </div>
        <div className="about-right">
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