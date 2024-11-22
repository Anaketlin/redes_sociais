const getcss = (variavel) => {
    const bodyStyles = getComputedstyle(document.body)
    return bodystyles.getPropertyValue(variavel)
}

    const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
    }

    export {getcs, tickConfig} 