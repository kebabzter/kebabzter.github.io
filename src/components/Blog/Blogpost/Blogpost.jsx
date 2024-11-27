const Blogpost = () => {
    return(
        <section
            className="min-h-screen p-20 pb-40 relative flex flex-col left-1/2 -translate-x-1/2 gap-10 text-xl w-1/2 text-black">
            <div className="title">
                <a className="text-pastel-baby-900/80 text-md" href="../blog.html"><i className="fa-solid fa-arrow-left"></i> back</a>
                <h1 className="text-5xl font-bold text-pastel-baby-900/80 mt-6">First Feedback</h1>
                <p className="text-black/60 italic mt-2 text-sm">October 17, 2024</p>
            </div>

            <p>I’m not even going to lie to you. I did <strong className="text-pastel-baby-900/80">not</strong> just come back from the review event. This is the night before the assessment. But here we go.</p>

            <p>To begin with, let me start by saying that all the feedback I received was <em>positive</em>, with only <strong className="text-pastel-baby-900/80">one</strong> suggestion for a change— which was a design choice about some buttons. I changed the buttons because I agree that they look better closer together.</p>

            <p>Anyways, as I mentioned in one of my previous blog posts, I want to make people say <em>"Oh shit, that's really cool!"</em> when they see what I create, so let’s just say that this goal has been <strong className="text-pastel-baby-900/80">achieved</strong> for this project, and I’m happy 😎.</p>

            <blockquote className="pl-4 border-l-4 border-pastel-baby-500 italic">I know it’s a short one, but what can I really write here? It’s not like I received much <em>criticism</em> 🤷‍♂️.</blockquote>
        </section>
    )
}

export default Blogpost;