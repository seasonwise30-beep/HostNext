import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Folder, FileText, Upload, Download, Trash2, MoreVertical, Search, Plus } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { MOCK_FILES } from '../../data/mockData';

export default function FileManager() {
  const { id } = useParams();
  const [currentPath, setCurrentPath] = useState('/');
  const [files, setFiles] = useState(MOCK_FILES);

  const handleFolderClick = (name: string) => {
    setCurrentPath(currentPath === '/' ? `/${name}` : `${currentPath}/${name}`);
  };

  const handleDelete = (name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setFiles(files.filter(f => f.name !== name));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link to={`/dashboard/servers/${id}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <h1 className="text-2xl font-bold text-white">File Manager</h1>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="secondary" className="flex-1 sm:flex-none">
            <Upload className="w-4 h-4 mr-2" /> Upload
          </Button>
          <Button variant="primary" className="flex-1 sm:flex-none">
            <Plus className="w-4 h-4 mr-2" /> New File
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm font-mono text-gray-300">
          <span className="text-gray-500">root@hostnext:</span>
          <span className="text-primary">{currentPath}</span>
        </div>
        <div className="w-full sm:w-64">
          <Input placeholder="Search files..." icon={<Search className="w-4 h-4 text-gray-500" />} />
        </div>
      </div>

      {/* File List */}
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-white/5">
                <th className="p-4">Name</th>
                <th className="p-4 hidden sm:table-cell">Size</th>
                <th className="p-4 hidden md:table-cell">Modified</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPath !== '/' && (
                <tr 
                  className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                  onClick={() => {
                    const parts = currentPath.split('/').filter(Boolean);
                    parts.pop();
                    setCurrentPath(parts.length ? `/${parts.join('/')}` : '/');
                  }}
                >
                  <td className="p-4 flex items-center gap-3 text-gray-300">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="font-medium">..</span>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-gray-500">--</td>
                  <td className="p-4 hidden md:table-cell text-gray-500">--</td>
                  <td className="p-4"></td>
                </tr>
              )}
              {files.map((file) => (
                <tr key={file.name} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4 flex items-center gap-3">
                    {file.type === 'folder' ? (
                      <Folder className="w-5 h-5 text-primary" />
                    ) : (
                      <FileText className="w-5 h-5 text-secondary" />
                    )}
                    <span 
                      className={`font-medium text-gray-200 ${file.type === 'folder' ? 'cursor-pointer hover:text-primary' : ''}`}
                      onClick={() => file.type === 'folder' && handleFolderClick(file.name)}
                    >
                      {file.name}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-sm text-gray-400">{file.size}</td>
                  <td className="p-4 hidden md:table-cell text-sm text-gray-400">{file.modified}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {file.type === 'file' && (
                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(file.name)}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-md" 
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md" title="More">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}