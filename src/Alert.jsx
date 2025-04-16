import { Fragment } from "react"

export default function Alert(props) {

    console.log(props)
    return (
        <Fragment>
            <div style={{
                fontSize: '18px',
                padding: '15px',
                border: '10px solid',
                marginBottom: '14px',

                color: props.color,
                backgroundColor: props.bgColor
            }
            }>
                {props.children}
            </div>
            <div></div>
        </Fragment>
    )

}
