class Api::BenchesController < ApplicationController

    def index
      @benches = Bench.all
    end

    def create
      bench = Bench.create!(bench_params)
      render :show
    end

    def bench_params
      params.require(:bench).permit(:description, :lng, :lat)
    end

end
