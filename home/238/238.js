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