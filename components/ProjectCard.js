function ProjectCard({
  name,
  description,
  imgUrl,
  imgAlt,
  siteUrl,
  githubUrl
}) {
  return (
    <div className='mb-6 w-full md:w-48% bg-primary rounded overflow-hidden shadow-lg'>
      <picture>
        <source type='image/webp' srcset={`${imgUrl}.webp`} />
        <source type='image/jpeg' srcset={`${imgUrl}.jpg`} />
        <img src={`${imgUrl}.jpg`} alt={imgAlt} />
      </picture>

      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-white'>{name}</div>
        <p className='text-gray-400 text-lg'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        <a
          href={siteUrl}
          className='inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
        >
          Link
        </a>
        <a
          href={githubUrl}
          className='inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
