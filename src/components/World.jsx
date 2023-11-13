import { Float, Text } from "@react-three/drei"
import { Matrix } from "./Matrix"

export default function World()
{
    return(<>
        <group>
            <Matrix 
                rotation-y={ Math.PI * 0.95 }
                position={ [0, - 1, 0] }
            />
            <Float>
                <Text
                    font="./assets/fonts/matrix.ttf"
                    fontSize={ 0.5 }
                >
                    Matrix
                </Text>
                <Text
                    position={ [0, - 0.3, 0] }
                    font="./assets/fonts/matrix.ttf"
                    fontSize={ 0.3 }
                >
                    tududuuu
                </Text>
            </Float>
        </group>
    </>)
}