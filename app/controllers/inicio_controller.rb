class InicioController < ApplicationController
  def inicio
    @fotos = Foto.all
  end
end
