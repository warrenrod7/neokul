// components/CreateSpaceForm.tsx
export default function CreateSpaceForm() {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md mx-40 mt-10 flex-col ">
        <h1 className="text-2xl font-semibold text-center mb-6">Create Space</h1>
        <form>
          
          <div className="mb-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              
              className="mt-1 block w-full bg-gray-200 h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={5}
              
              className="mt-1 block w-full bg-gray-200 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
  
          
          <div className="mb-4 flex flex-row space-x-4">
            <div className="h-20 w-1/2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              Add Members
            </label>
            
            <input
              type="text"
              id="search"
              
              className="mt-1 bg-gray-200 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>

            <div className="w-1/2 ">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Select Role
            </label>
            <select className="bg-gray-200 h-8 w-full">
              <option value="admin">Admin</option>
              <option value="teamlead">Team Lead</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
            </div>
          </div>
  
          
  
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Project
          </button>
        </form>
      </div>
    );
  }
  