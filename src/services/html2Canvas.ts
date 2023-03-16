import html2canvas from 'html2canvas';

export const html2Canvas = async (username: string, elementRef:React.MutableRefObject<null>) => {
  const element = elementRef.current
  console.log(elementRef.current)
  console.log(element)
  if (!element) {
    console.log('error 7 canvas')
    throw new Error('Element is empty or not found');
  }

  const canvas = await html2canvas(element);

  const url = canvas.toDataURL();
  const link = document.createElement('a');

  link.href = url;
  link.download = username + ' QueryCard';
  document.body.appendChild(link);
  link.click();    
  document.body.removeChild(link);  
}