
import './firstSection.sass'
import image1 from "../../../assets/img/about_top.jpg"
import image2 from "../../../assets/img/about_story.jpg"


export const FirstSectionAbout = () => {
    return (
        <>
            <section className='pt-16'>
                <div className='h-[38vh] flex justify-center items-center text-white' style={{ backgroundImage: `url(${image1})` }}>
                    <h1 className='text-8xl font-extrabold'>ABOUT</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-between lg:gap-x-8 gap-y-5 p-10 text-gray-400'>
                    <div className='overflow-hidden'>
                        <img className='lg:w-[35vw] hover:scale-110 duration-500 ' src={image2} alt="image" />
                    </div>
                    <div className='lg:w-[60vw] flex flex-col gap-y-5'>
                        <h1 className='text-4xl text-gray-800 font-bold '>Our story</h1>
                        <p>
                            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                        </p>
                        <div className='border-l-4 border-slate-300 p-3'>
                            <h1 className='text-sm'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</h1>
                            <h1 className='text-gray-600 text-xs'>- Steve Job’s</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
