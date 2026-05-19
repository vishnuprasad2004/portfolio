import React from 'react'
import Heading from '../Heading'
import blogs from '@/lib/blogs'
import BlogCard from '../BlogCard'


function BlogSection() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <Heading text="Blogs" />
        <div className="flex flex-grow pt-10 flex-col lg:flex-row justify-evenly flex-wrap gap-4 lg:items-start items-center">
          {blogs.map((blog, i) => {
            return (<BlogCard
              key={i}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              domains={blog.domains || []}
              platform={blog.platform}
              link={blog.link}
              created_at={blog.created_at}
            />)
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogSection