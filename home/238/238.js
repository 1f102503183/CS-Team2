document.addEventListener('DOMContentLoaded', function() {
            // 必要な要素をすべて取得
            const tabs = document.querySelectorAll('.tab-button');
            const panels = document.querySelectorAll('.tab-panel');

            // 各タブボタンにクリックイベントを設定
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // 1. すべてのタブとパネルから 'active' クラスを削除
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));

                    // 2. クリックされたタブに 'active' クラスを追加
                    tab.classList.add('active');

                    // 3. クリックされたタブに対応するパネルを表示
                    // タブの data-season 属性 (例: "spring") を取得
                    const season = tab.getAttribute('data-season');
                    // IDが一致するパネル (例: id="spring") を探す
                    const targetPanel = document.getElementById(season);
                    
                    if (targetPanel) {
                        targetPanel.classList.add('active');
                    }
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
            
            const sliderWrapper = document.querySelector('.slider-wrapper');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dotsContainer = document.querySelector('.dots-container');

            let currentIndex = 0;
            const slideCount = slides.length;
            let intervalId;

            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.dataset.index = i;
                dotsContainer.appendChild(dot);
            }
            const dots = document.querySelectorAll('.dot');

            function goToSlide(index) {
                sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) {
                    dots[index].classList.add('active');
                }
                currentIndex = index;
            }

            function startAutoPlay() {
                intervalId = setInterval(() => {
                    let nextIndex = (currentIndex + 1) % slideCount;
                    goToSlide(nextIndex);
                }, 3000);
            }
            
            function stopAutoPlay() {
                clearInterval(intervalId);
            }

            nextBtn.addEventListener('click', () => {
                const nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            });

            prevBtn.addEventListener('click', () => {
                const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
                goToSlide(prevIndex);
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    goToSlide(index);
                });
            });
            
            const sliderContainer = document.querySelector('.slider-container');
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);

            goToSlide(0);
            startAutoPlay();
        });