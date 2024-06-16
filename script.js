    // const text = "Hello! I'm Aditya, a passionate web designer and frontend developer. I love creating beautiful and functional websites. When I'm not coding, you can find me swimming, cycling, or traveling around the world.";

    const text = "I'm a passionate web developer with experience in building dynamic and responsive websites. I enjoy working with modern web technologies and always strive to learn new skills.";
    const typingTextElement = document.getElementById('typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    window.onload = type;
