function Contact() {
	return (
		<section className='pb-6 projects bg-primary' id='contact'>
			<div className='container p-3 mx-auto'>
				<h1 className='mt-6 mb-3 text-xl font-bold tracking-wide text-indigo-500 uppercase'>
					Contact Me
				</h1>
				<div className='flex flex-col md:flex-row md:justify-between'>
					<h2 className='flex-1 pr-3 mt-6 mb-3 text-lg tracking-wide text-gray-300'>
						Feel free to talk to me about opportunities, projects, offers or
						just about anything.
						<br />
						<br />
						I'll make sure to get back to you ~24 hours. Alternatively you can
						mailto{' '}
						<a
							className='text-indigo-400'
							href='mailto:francis.udejiofficial@gmail.com'
						>
							francis.udejiofficial@gmail.com
						</a>{' '}
					</h2>
					<div className='w-full p-6 ml-auto rounded bg-secondary md:ml-3 md:w-2/5'>
						<form className='w-full' data-netlify='true'>
							<div className='mb-3'>
								<label
									className='w-full mb-3 text-gray-500'
									htmlFor='name'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Your Full Name'
									className='w-full px-3 py-3 font-semibold bg-white border border-gray-500 rounded text-dark'
								/>
							</div>
							<div className='mb-3'>
								<label
									className='w-full mb-3 text-gray-500'
									htmlFor='email'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Your Email Address'
									className='w-full px-3 py-3 font-semibold bg-white border border-gray-500 rounded text-dark'
								/>
							</div>
							<div className='mb-3'>
								<label
									className='w-full mb-3 text-gray-500'
									htmlFor='message'
								>
									Message
								</label>
								<textarea
									id='message'
									rows='4'
									name='message'
									placeholder='Your Message'
									className='w-full p-3 font-semibold bg-white border border-gray-500 rounded text-dark'
								/>
							</div>
							<input
								type='submit'
								value='Send'
								className='w-full px-3 py-3 font-semibold text-white rounded bg-primary'
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
