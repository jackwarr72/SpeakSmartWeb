import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface FeaturedCourseProps {
  course: Post;
}

const FeaturedCourse: React.FC<FeaturedCourseProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-64 w-full object-cover md:w-80" src={course.imageUrl} alt={course.title} />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-accent font-bold">Featured Course</div>
          <h2 className="mt-2 text-3xl font-bold font-sans text-primary">{course.title}</h2>
          <p className="mt-4 text-text-dark">{course.excerpt}</p>
          <div className="mt-6">
            <Link to={`/post/${course.id}`} className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;