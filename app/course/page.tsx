import CourseComponent from "@/components/CourseComponent";


export default function Course(){
    return(
        <section>
        <h1 className="text-4xl ml-44">COURSES</h1>
        <div className="flex justify-center">
          <div >
          <CourseComponent/>
          </div>
        </div>
      </section>
        
    )
}