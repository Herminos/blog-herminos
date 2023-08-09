import { OSConfig,CodeEditorIDEConfig, GeneralConfig, DevelopmentRelatedConfig, PenetrationTestingConfig} from './content'


export default function Page(){
    return(
        <div className=' pt-16 flex flex-col'>
            <h1 className='text-center text-4xl my-20 self-center bg-gradient-to-r from-[#fccf31] to-[#f55555] bg-clip-text text-transparent'>Tools and Softwares I use</h1>
            <div className='w-5/6 mx-auto flex flex-col'>
                <Description config={OSConfig}/>
                <Description config={GeneralConfig}/>
                <Description config={CodeEditorIDEConfig}/>
                <Description config={DevelopmentRelatedConfig}/>
                <Description config={PenetrationTestingConfig}/>
            </div>
        </div>
    )
}

function Description({config}:{config:any}){
    /*
        {
            title:'Code Editor & IDE',
            list:[
                {
                    software:'Visual Studio Code',
                    URL='https://code.visualstudio.com/',
                    description:'My favourite Code Editor! I almost wrote all my code in VSCode. I also use VSCode to write this website!'
                },...
            ]
        }
    */
    const list=[];
    for(let i=0;i<config.list.length;i++){
        list.push(<li className='mt-5'><a href={config.list[i].URL} className='hover:text-sky-500'>{config.list[i].software}</a>: {config.list[i].description}</li>)
    }
    return(
        <>
            <h2 className='self-center text-2xl text-gray my-5'>{config.title}</h2>
            <ul className='list-disc text-light-gray my-5'>
                {list}
            </ul>
        </>
    )

}