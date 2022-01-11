import React from 'react';
let importall = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importall(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name: string
}
const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name}/>
            <br/>
        </svg>
    );
};

export default Icon;

