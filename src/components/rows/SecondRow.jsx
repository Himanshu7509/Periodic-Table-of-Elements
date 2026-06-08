import Element from "../Element"

export default function SecondRow({ data }){
    return(
        <div className="">

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:grid md:grid-cols-9">
              
                    <Element elementData={data[2]} />
                    <Element elementData={data[3]} />
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
                    <div className="hidden md:block">  </div>
                    
                    <Element elementData={data[4]} />
                    <Element elementData={data[5]} />
                    <Element elementData={data[6]} />
                    <Element elementData={data[7]} />
                    <Element elementData={data[8]} />
                    <Element elementData={data[9]} />
                   
                </div>
            </div>
         
            
        </div>
    )
}