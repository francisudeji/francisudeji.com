import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className='projects bg-secondary' id='projects'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold  mt-6 mb-10'>
          Projects
        </h1>
        <div className='flex flex-col md:flex-row md:flex-wrap justify-between'>
          <ProjectCard
            name='Movie Time'
            description='Easily book tickets for movies online without leaving your home. All movies are fetched from a third party API. It includes trailers, online payment and more.'
            imgUrl='/static/movietime.jpg'
            imgAlt='Movie Time'
            siteUrl='https://movietimesng.herokuapp.com'
            githubUrl='https://github.com/francisudeji/movietime'
          />
          <ProjectCard
            name='Cleanfits'
            description='An online laundry and dry cleaning agency that offer services such as dry cleaning, delivery and online payment with paystack.'
            imgUrl='/static/cleanfits.jpg'
            imgAlt='Cleanfits'
            siteUrl='https://cleanfits.herokuapp.com'
            githubUrl='https://github.com/francisudeji/cleanfits_original'
          />
          <ProjectCard
            name='Mini Unsplash Clone'
            description='This is an Unsplash Clone with very minimal set of features like searching, image details view and everything is in compliance with the unsplash terms of use.'
            imgUrl='/static/mini-unsplash.jpg'
            imgAlt='Mini Unsplash Clone'
            siteUrl='https://mini-unsplash.netlify.com'
            githubUrl='https://github.com/francisudeji/mini-unsplash-clone'
          />
          <ProjectCard
            name='GitHub Profile'
            description='GitHub Profile can be described as a mimic of the official GitHub website. Features user search, displaying of repositories, followers, following and stars.'
            imgUrl='/static/github-profile.jpg'
            imgAlt='GitHub Profile'
            siteUrl='https://github-profile.netlify.com'
            githubUrl='https://github.com/francisudeji/github-profile'
          />
        </div>
        <div className='block text-center my-6'>
          <a
            href='https://github.com/francisudeji?tab=repositories'
            className='inline-block bg-primary rounded px-3 py-3 text-sm font-bold text-gray-500 mr-2'
          >
            See More On GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
