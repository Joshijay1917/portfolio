import { FaExternalLinkAlt } from 'react-icons/fa'

const Attendance = () => {
    return (
        <div className='bg-gray-200 pb-10'>
            <div className='bg-[url("https://g4c7y7r6.delivery.rocketcdn.me/wp-content/uploads/2025/07/A-teacher-stands-by-a-chalkboard-with-a-CLASSROOM-MANAGEMENT-QR-code-poster-taking-attendance-as-four-students-listen-attentively-in-a-morning-classroom-setting.png")] bg-no-repeat bg-cover bg-center p-20 absolute mt-26 top-0 w-full'>
                <h1 className='text-5xl text-white font-bold'>Smart Attendance System</h1>
            </div>

            <div className='p-10 flex gap-3 pt-60 rounded-2xl px-50'>
                <div>
                    <h2 className='text-3xl font-medium my-4'>Overview</h2>
                    <p>This is a full stack project with using <strong>WebSockets</strong>. I created this project for <strong>SIH (Smart India Hackthon) 2025</strong>. I presented this project for internal round in college. I build this working prototype which generate and manages the sessions, students scan the QR Code and in real time faculty can see all students name in their dashboard.</p>
                    <div className='flex gap-3 m-14'>
                        <p>See Project:</p>
                        <a className='text-blue-500 flex items-center gap-3' href="https://smart-attendance-system-snowy.vercel.app">https://smart-attendance-system-snowy.vercel.app <FaExternalLinkAlt /></a>
                    </div>
                </div>
                <img className='rounded-2xl shadow-2xl' width={500} src="/attendance.png" />
            </div>

            <div className='p-10 flex gap-5 rounded-2xl px-50'>
                <img className='rounded-2xl shadow-2xl' width={500} src="/bg1.png" />
                <div>
                    <h2 className='text-3xl font-medium my-4'>Workflow</h2>
                    <p>There are two dashboards. One for faculty and one for students. Faculty can generate and manage sessions and students can see which sessions they attended through their respective dashboards. First faculty generates session which generates a Unique <strong>QR Code</strong> for that session. Students login and scans the <strong>QR Code</strong> which triggers Scan request On Backend with their crendantials. So Faculty can see that credantais of students from server in live through <strong>WebSockets</strong>.</p>
                </div>
            </div>

            
            <div className='p-10 flex gap-5 rounded-2xl px-50'>
                <div className='w-[50%]'>
                    <h2 className='text-3xl font-medium my-4'>Problem & Solution</h2>
                    <p>In this system there are <strong>two main concerns</strong> which need to be discuss.</p>
                    <h2 className='font-medium py-2'>Problems:</h2>
                    <ul className='list-disc pl-6'>
                        <li>First is students can send <strong>take photo</strong> of QR Code and send to their friends.</li>
                        <li>Second is students can scan QR Code from <strong>AnyWhere</strong>. If students are outside the classroom than can scan it from class window.</li>
                    </ul>
                    <h2 className='font-medium py-2'>Solution:</h2>
                    <ul className='list-disc pl-6'>
                        <li>So for the first problem <strong>QR Code refreshes</strong> in every 10 seconds. So when a student take photo and send it than expires in 10 seconds.</li>
                        <li>In Second problem as a Solution when student scan's a QR Code we also send the <strong>current location of student through GPS</strong> to server. So if the student is outside the classroom we cannot mark the attendance. But there is another problem <strong>GPS</strong> Cannot provide good accuracy for this. So we need to think about it.</li>
                    </ul>
                </div>
                <img className='rounded-2xl shadow-2xl' width={500} src="/pands.png" />
            </div>
        </div>
    )
}

export default Attendance