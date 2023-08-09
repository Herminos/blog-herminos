import Image from "next/image"
import nasmSVG from '../../../public/NASM.svg'
import cppSVG from '../../../public/cpp.svg'
import javaSVG from '../../../public/java.svg'
import csharpSVG from '../../../public/csharp.svg'
import pythonSVG from '../../../public/python.svg'
import jsSVG from '../../../public/js.svg'
import tsSVG from '../../../public/ts.svg'
import reactSVG from '../../../public/react.svg'
import tailwindSVG from '../../../public/tailwind.svg'
import nextSVG from '../../../public/next.svg'

export default function Page() {
    return(
        <div className=' pt-16 flex flex-col'>
            <h1 className='text-center text-4xl my-20 self-center bg-gradient-to-r from-[#fff720] to-[#3cd500] bg-clip-text text-transparent'>My TechPoints</h1>
                <TechPoint config={{
                    name:'Netwide Assembler',
                    image:nasmSVG,
                    URL:'https://www.nasm.us/',
                    description:'NASM is the best assembler in my opinion. I don\' like AT&T syntax( I think AT&T syntax wasn\'t designed for human! It has an incomprehensible memory addressing syntax and lots of unreasonable operation order! ), so I use NASM. For all the Intel-synatx assembly language like MASM, FASM, TASM, etc, I think NASM is the best. Not only cross-platform, but also easy to use. It has beautiful synatx and easy to understand. I use NASM to write my assembly code.'
                }}/>
                <TechPoint config={{
                    name:'C/C++',
                    image:cppSVG,
                    URL:'https://cplusplus.com/',
                    description:'C/C++ is the fist programming language I learned and used. Mainly I use C++ because it has a more powerful standard library, useful STL, more interesting features and more third-party libraries. When it comes to libraries, I use boost, Qt, libcurl, etc. Welcome to recommed me some useful libraries through email or social media! I like the design philosophy of C++: "You don\'t pay for what you don\'t use".'
                }}/>
                <TechPoint config={{
                    name:'Java',
                    image:javaSVG,
                    URL:'https://www.java.com/',
                    description:'I\'m not kind of a Java fan, but I have to admit that Java is a good programming language. After all "Write once, run everythere" isn\' a lie. I use Java to develop some cross-platform projects, Java Web projects and Minecraft Mods. I use OpenJDK and IntelliJ IDEA to develop Java projects.( Actually I should put an OpenJDK logo here, but I damn like the coffee cup logo of Java! )'
                }}/>
                <TechPoint config={{
                    name:'C#',
                    image:csharpSVG,
                    URL:'https://dotnet.microsoft.com/en-us/languages/csharp',
                    description:'C# is kind of similair to Java, I think Java works for all the environments samely, but C# works best for Windows. Thanks to Microsoft\'s native support, C# is definitely the best programming language on Windows. There\'re so many useful frameworks like MFC! As for me, I use C# to develop Unity project.'
                }}/>
                <TechPoint config={{
                    name:'Python',
                    image:pythonSVG,
                    URL:'https://www.python.org/',
                    description:'As the most popular script language, Python is really powerfull! Thanks to its large amount of third-party libraries, Python can do almost everything! I use Python to analyze data, stecate data, make web crawlers and so on. I don\' like the syntax of Python, I think it doesn\'t seem to be a professional programming languang, but I have to admit that it is powerfull.'
                }}/>
                <TechPoint config={{
                    name:'JavaScript',
                    image:jsSVG,
                    URL:'https://www.javascript.com/',
                    description:'As a script language, I was shocked to see its speed. So fast on V8 engine! For some times it\' even faster than C++! JavaScript is the best language for web pages, I use it to make web pages interactive and interesting. Besides, thanks to Node.js and Electron, JavaScript can do more than web pages. I use JavaScript to make web applications, desktop applications, etc.'
                }}/>
                <TechPoint config={{
                    name:'TypeScript',
                    image:tsSVG,
                    URL:'https://www.typescriptlang.org/',
                    description:'TypeScript is the best language for large projects. As a superset of JavaScript, TypeScript offers powerful and useful features like type checking, class, interface, etc. This website is based on TypeScript and Next.js. I think TypeScript makes up JavaScript\'s shortcomings like imperfect OOP support, weak type checking, etc.'
                }}/>
                <TechPoint config={{
                    name:'React.js',
                    image:reactSVG,
                    URL:'https://reactjs.org/',
                    description:'React.js is the best framework in my opinion. Writing React.js code is like writing native JavaScript code. I don\'t think it\'s hard to learn it, as long as you have a basic understanding of JavaScript, React.js will be your favourite framework. For other frameworks like Vue.js, they provide a lots of strange synatx like v-if, v-for, etc. It\' kind of like a new language instead of a JavaScript framework. I don\'t like them.'
                }}/>
                <TechPoint config={{
                    name:'Tailwind CSS',
                    image:tailwindSVG,
                    URL:'https://tailwindcss.com/',
                    description:'Tailwind CSS really makes my life a lot of better. By writing HTML class as CSS code, It boosts my work. It packages some of the useful CSS code into classes, so I don\'t have to write CSS code anymore. I don\'t like CSS, I think it\'s hard to write and hard to remember. This page\'s styling is based on Tailwind CSS.'
                }}/>
                <TechPoint config={{
                    name:'Next.js',
                    image:nextSVG,
                    URL:'https://nextjs.org/',
                    description:'As a React framework, I like Next.js\'s router! Insteading of configuring router in a separate file, Next.js uses file system to configure router. I think it\'s a good idea, because it\'s not only fit for human intuition, but also the best way to organize project. I also love Next.js\'s static page generation, server-side redering, and some unbelievable optimization, etc. This website is based on Next.js.'
                }}/>
                <div className='self-center flex flex-col'>
                    <p className='text-light-gray text-bg self-center'>{'I didn\'t list all the TechPoints I learned, some of them are not useful or I don\' like them. For example: Rust'}</p>
                    <p className='text-light-gray text-bg self-center'>Welcome to advise me through email or social media.</p>
                </div>
        </div>
    )
}

function TechPoint({config}:{config:any}){
    return(
        <div className='flex w-5/6 mx-auto border-2 border-gray px-2 py-2 rounded-lg shadow-md shadow-gray mb-20'>
            <div className='min-w-[350px] min-h-[350px] flex justify-center'>
                <Image src={config.image} width={200} height={200} alt={config.name} className='min-h-[200px] min-w-[200px] self-center'/>
            </div>
            
            <div className="flex flex-col w-full justify-center">
                <a className='self-center text-4xl text-light-gray hover:text-sky-500' href={config.URL}>{config.name}</a>
                <p className='self-center w-full mt-10 px-10 text-light-gray'>{config.description}</p>
            </div>
        </div>
    )
}