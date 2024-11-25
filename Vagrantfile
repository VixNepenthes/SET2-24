Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-20.04"
  config.vm.boot_timeout = 300
  
  # Mạng riêng tư
  config.vm.network "private_network", ip: "172.20.20.20"

  # Đồng bộ thư mục
  config.vm.synced_folder "./", "/home/vagrant"

  # Cấu hình VirtualBox
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

  # Script cài đặt phần mềm
  config.vm.provision "shell", inline: <<-SHELL
    # Cập nhật gói và cài đặt các công cụ cơ bản
    sudo apt-get update -y
    sudo apt-get upgrade -y
    sudo apt-get install -y curl gnupg2 ca-certificates lsb-release software-properties-common

    # Cài đặt Node.js (LTS)
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # Cài đặt Docker
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -y
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io

    # Thêm người dùng vagrant vào nhóm docker
    sudo usermod -aG docker vagrant

    # Cài đặt Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/download/2.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Cài đặt Nginx
    sudo apt-get install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx

    # Hiển thị phiên bản đã cài đặt
    node -v
    npm -v
    docker --version
    docker-compose --version
    nginx -v
  SHELL
end
