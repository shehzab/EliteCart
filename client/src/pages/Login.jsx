import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Login successful!')
    }, 1500)
  }
       
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
                 
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Login</h1>
          <p className="text-gray-500 text-sm">Enter your credentials to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
                     
          {/* Email */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-0 py-3 text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none bg-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-0 py-3 pr-10 text-gray-900 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none bg-transparent placeholder-gray-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center pt-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 w-3 h-3" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

        </form>

        {/* Demo Info */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center mb-2">Demo account:</p>
          <p className="text-xs text-center text-gray-500">
            demo@example.com / demo123
          </p>
        </div>

        {/* Sign Up */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-500">New here? </span>
          <Link
            to="/register"
            className="text-sm text-black hover:underline"
          >
            Create account
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login