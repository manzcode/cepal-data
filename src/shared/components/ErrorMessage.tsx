
function ErrorMessage({message}: {message: string}) {
  return <span className="text-red-500 text-2xl font-bold">
  {message}
</span>
}

export default ErrorMessage