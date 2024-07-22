import React from 'react'

const Card = ({username = 'RAJ', post= 'NA'}) => {
  ///
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >
        <img className="w-24 h-24 rounded-full mx-auto" src="https://amateurphotographer.com/wp-content/uploads/sites/7/2023/02/samsung_galaxy_s23ultra_Amy_Davies_002.jpg?resize=768,512" alt="" width="384" height="512" />
        
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400" >
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
  </div>
</figure>
  )
}

export default Card
