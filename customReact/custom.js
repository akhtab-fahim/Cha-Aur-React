function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('taget',reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'htpp:/google.com',
        target: '_blank'

    },
    children: 'Click Me to Visit Google'
}

const mainComponent = document.querySelector('#root')

customRender(reactElement,mainComponent)