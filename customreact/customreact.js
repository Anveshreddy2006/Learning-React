function customRender(reactElement,container){
    /*m-1
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.type)

        domElement.innerHTML = reactElement.children

        for (const pro in reactElement.props){
               if(pro==='children') continue
               domElement.setAttribute(pro,reactElement.props[pro])

        }
        container.appendChild(domElement)
    

}


const reactElement = {
    type :'a',
    props :{
        href:'https://google.com',
        target:'_blank'
    },
    children:'clck me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)


