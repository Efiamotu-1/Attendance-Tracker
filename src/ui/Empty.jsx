function Empty({ resourceName, extra }) {
    return <p className="text-center">No {resourceName} could be found, <span>{extra}</span></p>;
  }
  
  export default Empty;
  