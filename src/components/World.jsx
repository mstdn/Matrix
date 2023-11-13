import { Matrix } from "./Matrix"

export default function World()
{
    return(<>
        <Matrix 
            rotation-y={ Math.PI * 0.95 }
            position={ [0, - 1, 0] }
        />
    </>)
}