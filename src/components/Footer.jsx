
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Footer = () => {
    return (
        <div  onClick={(e) => e.stopPropagation()} className='h-50 mt-80 bg-[#1cb356] py-15 px-12'>
            <p className='text-white mb-5'>My Email: <span className='underline mr-3'>muhammadabubakaramjad786@gmail.com</span>
             <ContentCopyIcon
    className="cursor-pointer hover:text-blue-400 transition"
    onClick={() => {
      navigator.clipboard.writeText("muhammadabubakaramjad786@gmail.com");
      alert("Email copied to clipboard!");
    }}
  /></p>
           <a
  href="https://github.com/MuhammadAbuBakarAmjad"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
>
  <GitHubIcon fontSize="large" style={{ color: 'black', cursor: 'pointer' }} />
</a>
        </div>
    );
};

export default Footer;