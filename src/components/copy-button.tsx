import { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

interface CopyButtonProps {
  code: string;
  variantId: string;
}

export function CopyButton({ code, variantId }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Fallback method that works without Clipboard API permissions
    const textArea = document.createElement('textarea');
    textArea.value = code;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      textArea.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      textArea.remove();
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: '6px 12px',
        fontSize: '12px',
        fontWeight: '500',
        color: copied ? '#10b981' : '#6900ef',
        background: copied ? '#d1fae5' : '#f3e8ff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      {copied ? (
        <>
          <CheckCheck size={14} />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} />
          Copy code
        </>
      )}
    </button>
  );
}
