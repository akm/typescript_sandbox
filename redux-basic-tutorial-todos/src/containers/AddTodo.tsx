import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { AppDispatch } from '../store'

export const PureAddTodo = ({ onSubmit }: { onSubmit: (val: string) => void }) => {
    let input: HTMLInputElement

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                console.log(`input.value: "${input.value}"`)
                if (!input.value.trim()) {
                    return
                }
                onSubmit(input.value)
                input.value = ''
            }}>
                <input ref={node => input = node as HTMLInputElement} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onSubmit: (value: string) => {
        console.log(`onSubmit value: ${value}`)
        dispatch(addTodo(value))
    },
})

export default connect(null, mapDispatchToProps)(PureAddTodo)
