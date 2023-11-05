import { Link } from "react-router-dom";

const ExtraSection = () => {
    return (
        <div className="flex gap-5  max-w-7xl mx-auto mb-20 mt-10">
            <div className="w-[50%] ">
                <img className="w-full h-[550px] rounded-lg" src="https://i.ibb.co/Rj97JL8/img.jpg" alt="" />
            </div>
            <div className="w-[50%]  px-5">
                <h1 className="text-4xl font-bold">Group Assignments as a Class Element to Promote
                    Performance <br /> in Virtual Groups</h1>
                <h1 className="text-3xl underline underline-offset-2 my-3 font-bold text-[#ea580c]">Explain :</h1>
                <p>A group becomes a team when it can produce
                    excellent results. One question we can ask is what
                    class work elements can be used to improve
                    group academic and business performance. As
                    businesses and teams become more global and
                    dispersed or virtual, we need to address the
                    instructional designs in graduate business classes
                    that will facilitate students becoming effective
                    team members and delivering better teamwork
                    products in these settings. Ives and Jarvenpaa
                    (1996) and Gilbert (1996) suggested that online
                    technologies would change business education
                    and instructors, and predicted the widespread
                    deployment of virtual teams in classes, with
                    students becoming more active in their own</p>

                <p className="my-5">A review of significant research during the 1990s
                    regarding online/hybrid learning and
                    collaboration offered some general conclusions. </p>
                <Link to="readMore">
                <button className="text-2xl mb-3 font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Read More...</button>
                </Link>
            </div>
        </div>
    );
};

export default ExtraSection;