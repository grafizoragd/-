    // Floating cursor blob
    const blob=document.getElementById('blob');
    addEventListener('pointermove', (e)=>{
      const x=e.clientX, y=e.clientY; blob.style.left=x+"px"; blob.style.top=y+"px";
    });

    // Scroll reveal
    const els=[...document.querySelectorAll('[data-reveal]')];
    const io=new IntersectionObserver((entries)=>{
      entries.forEach((en)=>{ if(en.isIntersecting){ en.target.classList.add('show'); io.unobserve(en.target); } });
    },{threshold:.15});
    els.forEach(el=>io.observe(el));

    // Form demo
    function sendEmail(ev){
      ev.preventDefault();
      alert('Terima kasih! Pesanmu sudah dicatat. Untuk respon cepat, klik tombol WhatsApp ya ✨');
    }