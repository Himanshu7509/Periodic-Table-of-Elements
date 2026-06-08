import Element from "../Element"

export default function ThirdRow({ data }){
    return(
        <div className="">

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:grid md:grid-cols-9">
                    <Element elementData={data[10]} />
                    <Element elementData={data[11]} />
                    <div className="hidden md:block"> </div>
                    
                    <div className="hidden md:block"> </div>
                    <div className="hidden md:block"> </div>
                    <div className="hidden md:block">  </div>
                    <div className="hidden md:block">  </div>
                    <div className="hidden md:block"> </div>
                    <div className="hidden md:block">  </div>

                </div>
                <div className="w-full md:w-1/2 md:grid md:grid-cols-9">
                    <div className="hidden md:block">  </div>
                    <div className="hidden md:block">  </div>
                    <div className="hidden md:block"> </div>
                    
                    <Element elementData={data[12]} />
                    <Element elementData={data[13]} />
                    <Element elementData={data[14]} />
                    <Element elementData={data[15]} />
                    <Element elementData={data[16]} />
                    <Element elementData={data[17]} />
                    
                </div>
            </div>
         
            
        </div>
    )
}