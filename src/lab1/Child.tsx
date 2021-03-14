import React, {FC} from "react";



interface Props {
    level: number;
    nums: Array<number>;
}


const red : any = {
    border: '1px solid red',
    height: '50%',
    width: 'auto',
    padding : '10px',
    textAlign: 'center',
}

const a : number = 1;

const Child: FC<Props> = ({ nums, level }: Props) => {
    const numlist =
        nums.map((index: number) =>
            <h2 key={index}>
                <div style={red}>
                    {level} x {index} = {level * index}
                </div>
            </h2>
        )

    return(
        <>
            <h6>{numlist}</h6>
        </>
    );
}

export default Child ;