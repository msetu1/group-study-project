import { Link } from "react-router-dom";

const ReadMore = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto my-28 px-20 border ">
            <div className="text-center">
                <h1 className="text-5xl font-bold ">Group Assignments as a Class Element <br /> to Promote
                    Performance <br /> in Virtual Groups</h1>
                <h1 className="mt-6 text-3xl font-bold text-[#ea580c] underline underline-offset-2">Abstract</h1>
            </div>
            <div className="mt-10 ">
                <p>One of the responsibilities of business schools within universities is to prepare students be successful in
                    business. Success in business often requires students to be effective working and collaborating in virtual
                    teams: groups who are geographically dispersed with members who have never met. Schools have
                    become aware of the need for students to work in teams, but need to investigate the structure and
                    design of courseware to build collaboration skills within students. The goal of this research was to
                    determine if there is an optimal number of group assignments that will result in better group learning
                    performance. This research investigates the optimum number of group assignments needed to promote
                    effective work within virtual teams, by examining performance on a final assignment of a business case.
                    The findings are that students who have at least a medium exposure (three) to group assignments
                    performed significantly better on the business case and cost risk benefit analysis then students with no
                    group assignments prior to the business case. This is significant because it can aid in the pedagogical
                    development of undergraduate and graduate courses in information technology.</p>
                <p className="my-5"><span className="text-2xl font-semibold">Keywords:</span> Group performance; group collaboration; virtual groups; self-regulated learning.</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">1. INTRODUCTION</h1>
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
                    students becoming more active in their own learning and research. However, Arbaugh et al.
                    (2009) indicated that this transition has not
                    moved as quickly as those authors’ predicted.
                    There are reasons linked to this slow adoption. At
                    the university levels, a concern often raised by
                    business school scholars is that research in
                    education has not been perceived as valuable by
                    business and education, and research has not
                    addressed the applicability of education research
                    and pedagogical best practices to business.
                    Educators have had little to guide them when
                    making decisions regarding the elements of
                    comprehensive design of classes. Yet, currently
                    business schools are expected by professional
                    organizations to be involved in learning and
                </p>
                <p className="my-5">education research and to apply this research to
                    their organizations (Arbaugh et al., 2009).
                    Although a significant body of research over the
                    past twenty years has indicated hybrid or blended
                    courses can result in more positive student
                    outcomes than face-to-face and purely online
                    courses (Arbaugh & Benbunan-Fich, 2007;
                    Arbaugh et al., 2009; Benbunan-Fich & Arbaugh,
                    2006; Means et al., 2013; Zhao et al., 2005) it
                    has not investigated the most effective blend of
                    course elements to improve student outcomes.
                    These elements can include face-to-face and
                    online time; the use of technologies; and, a
                    particular concern of this research, the level of
                    student interaction or group work (Zhao et. al.,
                    2005) and group goal setting (Buller & Bell,
                    1986).
                    From an operational perspective, learning
                    management systems and web delivery have
                    revolutionized higher education. The proliferation
                    of online educational tools has begun to have a
                    dramatic effect on higher education and corporate
                    education and training. However, there is a need
                    for teams to be able to interact effectively
                    through online collaboration tools to learn as a
                    group. There has been limited research in the
                    area that addresses the effectiveness of learning
                    through online group collaboration to enhance
                    student performance. This research presents the
                    results of a study to assess the level of group
                    experience on the quality of group deliverables.
                    It would be beneficial for educators and
                    corporations to examine one of those pedagogical
                    elements, level of group assignments, or student
                    interaction, as effect on student performance, as
                    demonstrated by group-based performance on a
                    business case and cost risk benefit analysis. This
                    paper will present a quantitative assessment of
                    level of group performance as a consequence of
                    level of assignments.</p>
            </div>
            <div>
                <h1 className="text-xl font-bold mt-10">2. LITERATURE REVIEW</h1>
                <p>A review of significant research during the 1990s
                    regarding online/hybrid learning and
                    collaboration offered some general conclusions.
                    The studies showed the delivery of business
                    education using hybrid technology compared
                    significantly better to face-to-face education;
                    asynchronous communication stimulated group
                    communications in online environments; and
                    collaborative team relationships could be
                    developed in online, virtual groups (Arbaugh et
                    al., 2009). These findings bode well for corporate</p>
                <p className="my-5">by supplying a virtual collaborative environment.
                    Course management tools provide logistical
                    enablement, but students learn more when they
                    participate in group endeavors through the
                    exercising of cognitive processes that require
                    resolution of conflicts or disagreements in group
                    discussions, assimilation of knowledge, and
                    discussion/negotiation (Benbunan-Fich and
                    Arbaugh, 2006; Benbunan-Fich & Hiltz, 2003;
                    Piccoli, Ahmad, & Ives, 2001; Webb, 1982). In a
                    study of 40 MBA courses Arbaugh and BenbunanFich (2007) found that students perceived
                    learning was higher in courses designed with
                    group learning activities, and with instructor-led
                    content (group-based objectivism), when
                    compared to individual oriented courses.
                    Students achieve higher perceptions of learning
                    in courses where knowledge is transmitted
                    through the system, and students are engaged in
                    collaborative assignments. The authors found
                    that the absence of knowledge construction and
                    group collaboration has a negative effect on
                    student performance. The authors also
                    determined that a significant number of studies
                    indicate participant engagement, whether it is
                    between participants and/or between participants
                    and the instructor, is one of the strongest
                    predictors of positive student performance.
                    Arbaugh et al. (2009) reported studies of learner–
                    learner interaction and instructor-leaner
                    interactions both showed positive results in
                    learner outcomes in online courses.
                </p>
            </div>
            <div className="flex justify-center">
                <Link to="/">
                    <button className="text-2xl mb-3 mt-5 font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Go to Home page</button>
                </Link>
            </div>
        </div>
    );
};

export default ReadMore;